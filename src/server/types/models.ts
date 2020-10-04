export interface User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    banned?: number;
    created_at?: Date;
}

export interface Card {
    id?: number;
    user_id?: number;
    title?: string;
    content?: string;
    created_at?: Date;
}

export interface Deck {
    id?: number;
    user_id?: number;
    deck_name?: string;
    created_at?: Date;
}

export interface MySQLResponse {
    fieldCount?: number;
    affectedRows?: number;
    insertId?: number;
    serverStatus?: number;
    warningCount?: number;
    message?: string;
    protocol41?: boolean;
    changedRows?: number;
}