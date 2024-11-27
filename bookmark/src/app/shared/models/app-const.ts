export class AppConst {
  public static LOCALHOST = 'http://localhost:3000';
  public static BOOKMARKS_BASE_ROUTE = AppConst.LOCALHOST + '/bookmarks';
  public static GET_ALL_BOOKMARKS = AppConst.BOOKMARKS_BASE_ROUTE;
  public static POST_BOOKMARK = AppConst.BOOKMARKS_BASE_ROUTE;
  public static UPDATE_BOOKMARK = AppConst.BOOKMARKS_BASE_ROUTE;
  public static DELETE_BOOKMARK = AppConst.BOOKMARKS_BASE_ROUTE;
  public static GET_FILTERED_BOOKMARKS =
    AppConst.LOCALHOST + '/bookmarks/filter';
}
