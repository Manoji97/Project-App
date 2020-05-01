class Task {
  constructor(
    id,
    text,
    imagelinks = None,
    taskid = None,
    urls = None,
    progress = None,
    remainder_date = None,
    to_be_completed_date = None,
    created_on = None,
    is_favourite = None,
    progress_detail = None,
    latitude = None,
    longitude = None
  ) {
    (this.id = id),
      (this.text = text),
      (this.imageLinks = [...imagelinks]),
      (this.subtaskOf = taskid),
      (this.urls = [...urls]),
      (this.progress = progress),
      (this.remainderDate = remainder_date),
      (this.toBecompletedDate = to_be_completed_date),
      (this.createdOn = created_on),
      (this.isFavourite = is_favourite),
      (this.progressdetail = progress_detail),
      (this.location = [latitude, longitude]);
  }
}
