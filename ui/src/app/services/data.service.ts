import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db ?: any;

  constructor() {
    const request = indexedDB.open("maikr");
    request.onerror = (event) => {
      console.error(event);
    };
    this.setupSuccessTrigger(request);
    this.setupDatabaseStructure(request);
  }

  list<T>(): Array<T> {
    return [];
  }

  create<T>(item: T): T {
    return {} as T;
  }

  get<T>(id: number): T {
    return {} as T;
  }

  update<T>(item: T): T {
    return {} as T;
  }

  delete<T>(item: number | T): void {

  }


  private setupSuccessTrigger(request: IDBOpenDBRequest): void {
    request.onsuccess = (event) => {
      this.db = (event?.target as any)?.result;

      this.db.onerror = (event: any) => {
        // Generic error handler for all errors targeted at this database's
        // requests!
        console.error(`Database error: ${event.target.errorCode}`);
      };
    };
  }

  private setupDatabaseStructure(request: IDBOpenDBRequest): void {
    request.onupgradeneeded = (event) => {
      const db = (event?.target as any)?.result;
    
      // Create another object store called "names" with the autoIncrement flag set as true.
      // const objStore = db.createObjectStore("tickets", { autoIncrement: true });

      db.createObjectStore("tickets", { autoIncrement: true });
    };
  }
}
