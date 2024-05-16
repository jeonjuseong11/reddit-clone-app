module.exports = {
  /**
   * @template: singleQuote: <boolean>
   * @description: 큰따옴표("") 대신 작은따옴표('')를 사용여부
   * true: 홑따옴표로 사용
   * false: 큰따옴표로 사용
   */
  singleQuote: true,

  /**
   * @template: semi: <boolean>
   * @description: statement 마지막에 세미콜론을 찍을지 여부
   * true: 세미콜론을 찍음
   * false: 세미콜론을 찍지 않음
   */
  semi: true,

  /**
   * @template: useTabs: <boolean>
   * @description: 탭을 사용할지 스페이스를 사용할지 여부
   * true: 탭을 사용
   * false: 스페이스를 사용
   */
  useTabs: false,

  /**
   * @template: tabWidth: <number>
   * @description: 탭을 사용할 경우 몇 스페이스를 사용할지 지정
   * 기본 값: 2 스페이스
   */
  tabWidth: 2,

  /**
   * @template: trailingComma: <'none' | 'es5' | 'all'>
   * @description: 여러 줄로 나뉘었을 때 쉼표를 사용 여부
   * 가능한 모든 곳에 쉼표를 사용
   */
  trailingComma: 'all',

  /**
   * @template: printWidth: <number>
   * @description: 선호되는 한 줄의 길이. 줄바꿈 한폭 길이
   * 기본 값: 120
   */
  printWidth: 120,

  /**
   * @template: arrowParens: <'avoid' | 'always'>
   * @description: 화살표 함수에서 괄호 사용 여부
   * avoid: 인자가 하나일 때 괄호를 사용하지 않음
   * always: 인자가 하나일 때도 괄호를 사용
   */
  arrowParens: 'avoid',

  /**
   * @template: endOfLine: <'auto' | 'lf' | 'crlf' | 'cr'>
   * @description: 파일의 마지막에 EOL을 보장
   * auto: 자동으로 기존의 EOL을 유지
   */
  endOfLine: 'auto',
};
