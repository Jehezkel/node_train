import IPost from "../models/Post";
import http from "./api-client.service";

export class PostsService {
  static baseUrl = "/posts";
  static async getPosts() {
    return http.get<IPost[]>(this.baseUrl);
  }
  static async getPostById(id: number) {
    return http.get<IPost>(`${this.baseUrl}/${id}`);
  }
  static async create(post: IPost) {
    return http.post<IPost>(this.baseUrl, post);
  }
  static async delete(id: number) {
    return http.delete<any>(`${this.baseUrl}/${id}`);
  }
  static async update(post: IPost) {
    return http.put<any>(`${this.baseUrl}/${post.post_id}`, post);
  }
  static async vote(post: IPost, vote: number) {
    return http.post<any>(`${this.baseUrl}/vote`, {
      post_id: post.post_id,
      vote: vote,
    });
  }
}
