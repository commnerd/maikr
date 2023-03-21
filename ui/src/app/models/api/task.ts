export interface Task {
    id: string;
    list_id: string;
    short: string;
    long: string;
    parent_task_id?: string;
    created_at?: Date;
    modified_at?: Date;
    deleted_at?: Date;
}
