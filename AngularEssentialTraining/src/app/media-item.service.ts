import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium) {
    let getOptions = {
      // medium: medium;
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        })
      );
  }

  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem);
  }

  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
}


interface MediaItem {
  id : number,
  name: String,
  medium: String,
  category: String,
  year: String,
  watchedOn: number,
  isFavorite: boolean
}


interface MediaItemsResponse {
  mediaItems: MediaItem[]
}
