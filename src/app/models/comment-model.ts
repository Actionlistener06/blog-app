export interface CommentModel {
  id: number;
  post_id: number;
  user_id: number;
  content: string;
  creation_date?: Date;
  isConfirmed?: boolean;
}
