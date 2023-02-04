export default interface IPost {
  post_id: number;
  title: string;
  body: string;
  upvotesCnt: number;
  commentsCnt: number;
  created_by: string;
  created_date: EpochTimeStamp;
  updated_by: string;
  updated_date: EpochTimeStamp;
}
