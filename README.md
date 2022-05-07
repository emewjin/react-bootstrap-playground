- tailwind 활용 수월하지 않다
  - 부투스트랩도 scss로 만든 클래스 기반이라, 겹치는 class가 많음
  - border, shadow-lg -> 충돌되어 부트스트랩 걸로 우선적용
  - 현재 우선순위: tailwind - bootstrap - custom global. 부트스트랩을 더 높게 둔 것은 테일윈드 설정 때문에 일부 컴포넌트 스타일이 이상하게 되는 경우가 있어서
    ```ts
    import './index.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import './custom.css';
    ```
    - 때문에 tailwind class로는 컴포넌트 스타일 덮어쓰기 불가
- 커스텀 폰트 적용시 Important 필요
- 커스텀 컬러 팔레트 적용시 쉽게하려면 scss 필요 : https://stackoverflow.com/questions/38792005/how-to-change-the-bootstrap-primary-color

  - 순수 css로는 overriding : 이런 작업을 대신해주는, 부트스트랩 커스터마이징을 위한 다양한 사이트들이 존재함

## DX

- Typography 컴포넌트가 없다..? tailwind 쓰거나 부트스트랩에서 준비한 class가 뭐뭐 있는지를 외워야할듯
- 툴팁 사용법이 맨틴이나 랠릿보다 코드가 더 많긴 하다

  ```tsx
  <OverlayTrigger
    key={placement}
    placement={placement}
    overlay={
      <Tooltip id={`tooltip-${placement}`}>
        Tooltip on <strong>{placement}</strong>.
      </Tooltip>
    }
  >
    <Button variant="secondary">Tooltip on {placement}</Button>
  </OverlayTrigger>
  ```
