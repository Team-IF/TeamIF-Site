import React from 'react';
import styled from 'styled-components';
import NoStyleLink from '../atomics/NoStyleLink';

const Container = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #c0c0c0;

  @media screen and (max-height: 540px) {
    height: 100%;
  }
`;

const FormStyle = styled.div`
  width: 38rem;
  height: 35.8rem;

  @media screen and (max-width: 720px) {
    width: 20rem;
  }
`;

const LableStyle = styled.label`
  font-size: 14px;
`;

const FORM_API = 'https://send.pageclip.co/WxQFpM94Pf8Om7EJL0SoQ8be6WXTSibP';

const Career: React.FC = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/98.css" />
      <Container>
        <div>
          <FormStyle className="window">
            <div className="title-bar">
              <div className="title-bar-text">TeamIF 지원하기</div>
              <div className="title-bar-controls">
                <button type="button" aria-label="Minimize" />
                <button type="button" aria-label="Maximize" />
                <NoStyleLink to="/">
                  <button type="button" aria-label="Close" />
                </NoStyleLink>
              </div>
            </div>

            <div className="window-body">
              <p>* 해당 페이지는 버그가 없습니다.</p>
              <br/>
              <form action={FORM_API} method="post">
                <div className="field-row-stacked">
                  <LableStyle>디스코드 아이디</LableStyle>
                  <input type="text" name="discord" pattern="^((.+?)#\d{4})" required />
                </div>
                <div className="field-row-stacked">
                  <LableStyle>이메일</LableStyle>
                  <input type="email" name="email" required />
                </div>
                <div className="field-row-stacked">
                  <LableStyle>GitHub 주소</LableStyle>
                  <input
                    type="text"
                    name="github"
                    pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
                    required
                  />
                </div>
                <div className="field-row-stacked">
                  <LableStyle>나이</LableStyle>
                  <input type="text" name="age" pattern="^[0-9]+$" required />
                </div>
                <div className="field-row-stacked">
                  <LableStyle>자기소개</LableStyle>
                  <textarea name="introduce" minLength={100} maxLength={30} rows={20} required />
                </div>
                <br />
                <button type="submit">지원하기</button>
              </form>
            </div>
          </FormStyle>
        </div>
      </Container>
    </>
  );
};

export default Career;
