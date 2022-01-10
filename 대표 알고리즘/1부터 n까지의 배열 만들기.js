//다음과 같이 입력하는 경우에, 특정 길이만큼의 정수값을  가진 배열을 얻어올 수 있다.
Array.from(Array(10).keys())
//spread syntax를 사용하여 더 짧게 표현할 수 있다.
const array = [...Array(10).keys()]
