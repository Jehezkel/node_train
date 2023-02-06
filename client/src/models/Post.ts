export default interface IPost {
  post_id: number;
  title: string;
  body: string;
  upvotes_cnt: number;
  downvotes_cnt: number;
  comments_cnt: number;
  created_by: string;
  created_date: EpochTimeStamp;
  updated_by: string;
  updated_date: EpochTimeStamp;
  user_vote: number;
}
