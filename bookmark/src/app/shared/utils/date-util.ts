export class DateUtil {
  public static today = () => new Date();
  public static yesterday = () => {
    let d = new Date();
    d.setDate(d.getDate() - 1);
    return d;
  };
}
