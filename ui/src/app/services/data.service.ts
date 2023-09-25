import { Injectable } from '@angular/core';
import { of, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db ?: any;
  table ?: string;

  constructor(item: object) {
    let className = item.constructor.name;
    const request = indexedDB.open("maikr");
    request.onerror = (event) => {
      console.error(event);
    };
    this.setupDatabaseOpenTriggers(request);
    this.setupDatabaseStructure(request);
  }

  list<T>(): Promise<Array<T>> {
    return this.runTransaction<T, Array<T>>("list", {} as T);
  }

  create<T>(item: T): Promise<T> {
    return this.runTransaction<T, T>("create", item);
  }

  get<T>(id: number): Promise<T> {
    return this.runTransaction<number, T>("get", id);
  }

  update<T>(item: T): Promise<T> {
    return this.runTransaction<number | T,T>("update", item);
  }

  delete<T>(item: number | T): Promise<void> {
    return this.runTransaction<number | T,void>("delete", item);
  }

  private runTransaction<I, O>(method: string, item: I | null): Promise<O> {
    const tableName = item?.constructor.name.toLowerCase();
    const transaction = this.db.transaction([tableName], "readwrite").objectStore(tableName);
    this.setupTransactionTriggers(transaction);

    return lastValueFrom(of({} as O));
  }

  private setupTransactionTriggers(transaction: any) {
    this.setupTransactionSuccessTrigger(transaction);
    this.setupTransactionErrorTrigger(transaction);
  }

  private setupTransactionSuccessTrigger(transaction: any): void {
    // Do something when all the data is added to the database.
    transaction.oncomplete = (event: any) => {
      console.log("All done!", event);
    };
  }

  private setupTransactionErrorTrigger(transaction: any): void {
    transaction.onerror = (event: any) => {
      console.error("Ugh...", event);
    };
  }


  private setupDatabaseOpenTriggers(request: IDBOpenDBRequest) {
    this.setupDatabaseOpenSuccessTrigger(request);
    this.setupDatabaseOpenErrorTrigger(request);
  }

  private setupDatabaseOpenSuccessTrigger(request: IDBOpenDBRequest): void {
    request.onsuccess = (event) => {
      this.db = (event?.target as any)?.result;
    };
  }
  
  private setupDatabaseOpenErrorTrigger(request: IDBOpenDBRequest): void {
    request.onerror = (event) => {
      console.error("The database failed to open.", event);
    };
  }

  private setupDatabaseStructure(request: IDBOpenDBRequest): void {
    request.onupgradeneeded = (event) => {
      const db = (event?.target as any)?.result;
    
      db.createObjectStore("tickets", { autoIncrement: true });
    };
  }
}
