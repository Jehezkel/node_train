import IPost from "../models/Post";
import http from "./api-client.service";

export class PostsService {
  public baseUrl = "/posts";
  public async getPosts() {
    return http.get<IPost[]>(this.baseUrl);
  }
  public async getPostById(id: number) {
    return http.get<IPost>(`${this.baseUrl}/${id}`);
  }
  public async create(post: IPost) {
    return http.post<IPost>(this.baseUrl, post);
  }
  public async delete(id: number) {
    return http.delete<any>(`${this.baseUrl}/${id}`);
  }
  public async update(post: IPost) {
    return http.put<any>(`${this.baseUrl}/${post.post_id}`, post);
  }
}
