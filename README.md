# Animation

---

canvas playground.

### 애니메이션

- ` window.requestAnimationFrame(drawSomething);`
  재귀 형식으로 사용해야한다. drawSomething 함수에 특정 조건을 걸어두고 재귀 함수를 호출해야함 -> 조건은 종료조건이 되는 것이 좋아보임

- canvas 위에 그린 그림은 `HTMLElement` 가 아니기 때문에 요소에 대한 좌표 또는 size 에 대한 값을 처리하는 코드를 따로 넣어줘야 한다.
