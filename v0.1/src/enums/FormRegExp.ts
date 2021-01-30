class FormRegExp {
  /**
   * 正整数
   */
  static PINT = /[1-9]\d*/;
  /**
   * 正整数含0
   */
  static PINT_AND_ZERO = /^([1-9]\d*|[0]{1,1})$/;
  /**
   * 负整数
   */
  static NINT = /-[1-9]\d*/;
  /**
   * /中文
   */
  static CHINESE = /^[\u4e00-\u9fa5]+$/;
  /**
   * 非中文
   */
  static NOT_CHINESE = /^[^\u4e00-\u9fa5]+$/;
  /**
   * 邮箱
   */
  static EMAIL = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
  /**
   * /m n 需要自定义,判断是否是2位/3位或4位数字
   */
  static NUMBER = /^\d{2,4}$/;
  /**
   * 正负整数或者正负小数
   */
  static NUMBER_OR_FLOAT = /^(-)?\d+(\.\d+)?$/;
  /**
   * 手机号码
   */
  // MOBILEPHONE='^1[0-9]{10}$|^+[0-9]{1,3}1[0-9]{10}$';
  static MOBILE = /^1[3456789]\d{9}$/;
  /**
   * 电话
   */
  static PHONE = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  /**
   * 带区号的电话
   */
  // PHONEAREA=/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  /**
   * 非零开头的最多带4位小数的数字
   */
  static INT_OR_FLOAT = /^([1-9][0-9]*)+(.[0-9]{1,4})?$/;
  /**
   * /社会统一信用代码,18位 数字或大写英文字母组成
   */
  static SOCIALCREDITCODE = /^[A-Z0-9]{18}$/;
  /**
   * 精准的社会统一信用代码,比如这个就是对的:A1430111MA4L16JQ9B
   */
  static SOCIALCREDITCODE_PRECISE = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
  /**
   * 工商注册号:15位数字
   */
  static BUSLICENSE = /\d{15}$/;
  /**
   * 组织机构代码:9位数字或大写英文字母
   */
  static ORGCODE = /^[A-Z0-9]{9}$/;
  /**
   * /纳税人识别号:15位、18或者20位数字或字母
   */
  static TAXID = /^[A-Za-z0-9]{15}$|^[A-Za-z0-9]{18}$|^[A-Za-z0-9]{20}$/;
  /**
   * 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
   */
  static IDCARD = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/;
  /**
   * 港澳身份证
   */
  static HK_IDCARD = /^([A-Z]\d{6,10}(\(\w{1}\))?)$/;
  /**
   * 台湾身份证
   */
  static TW_IDCARD = /^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/;
  /**
   * 军官证
   */
  static OFFICERCARD = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/;
  /**
   * 户口本
   */
  static ACCOUNTCARD = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  /**
   * 护照
   */
  static PASSPORTCARD = /^([a-zA-z]|[0-9]){5,17}$/;
  /**
   * 驾驶证
   */
  static DRIVERCARD = /^[1-8]\d{11}$/;
  /**
   * ip地址
   */
  static IPADRESS = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  /**
   * 传真;
   */
  static FAX = /^(\d{3,4}-)?\d{7,8}$/;
  /**
   * ICP备案号
   */
  static ICP = /^[京津晋冀蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川贵云藏陕甘青宁新]ICP备\d{8}(-[1-9]\d?)?$/;
}

export default FormRegExp;
