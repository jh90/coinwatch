class Save {
  constructor (id, title, data, user_id, is_public) {
    this.id = id;
    this.title = title;
    // this.data = data;
    this.user_id = user_id;
    this.is_public = is_public;
  };
}

module.exports = Save;
