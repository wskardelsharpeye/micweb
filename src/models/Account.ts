/**
 * role :
 *  1.employer
 *  2.candidate
 *  3.assistant
 *  4.newcomer
 */
export interface Account {
    id: number;
    account: string;
    role: string;
}