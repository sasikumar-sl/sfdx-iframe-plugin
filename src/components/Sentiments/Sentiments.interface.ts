export type SentimentType = {
    id: string;
    text: string;
    labels: string[];
    created_at: Date | string | number;
    [k: string]: any;
};