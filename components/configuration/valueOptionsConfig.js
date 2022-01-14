export const INPUT_OPTION_TYPE = {
  TEXT: 1,
  COLOR: 2
}

export default {
  fontSize: ['12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px', '21px', '22px', '23px', '24px', '25px', '26px', '27px', '28px', '29px', '30px', '31px', '32px', '33px', '34px', '35px', '36px', '37px', '38px', '39px', '40px', '41px', '42px', '43px', '44px', '45px', '46px', '47px', '48px'],
  fontWeight: ['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit'],
  fontLineHeight: [1, 1.3, 1.5, 1.7, '12px', '16px', '20px', '24px', '28px'],
  borderRadius: [
    {label: '大圆角', value: '$--border-radius-base'},
    {label: '小圆角', value: '$--border-radius-small'},
    {label: '原型圆角', value: '$--border-radius-circle'},
    {label: '无圆角', value: '$--border-radius-zero'}
  ],
  padding: () => [...Array(100).keys()].map(i => `${i+1}px`),
}