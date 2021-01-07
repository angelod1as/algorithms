import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${p => p.theme.colors.gold};

  & > div {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${p => p.theme.colors.white};
    padding: 40px 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  h1 {
    font-weight: 700;
  }

  button {
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    user-select: none;
    text-transform: uppercase;
    border: 0;

    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.black};
    font-weight: 700;

    padding: 1rem 1.5rem;
    font-size: 1rem;
    line-height: 1;

    &:hover {
      background-color: #292929;
      background-color: ${p => p.theme.colors.hoverBlack};
    }
  }
`

export const Section = styled.div`
  width: 100%;
  margin: 20px 0;
  label,
  input {
    display: block;
    width: 100%;
  }

  label {
    color: #909090;
    margin-bottom: 4px;
    font-size: 0.75rem;
    line-height: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
  }

  input {
    font-size: 1.2rem;
    border: 0;
    line-height: 1;
    font-weight: 700;
    outline: none;
    padding: 5px 0 0;
    box-shadow: inset 0 -1px 0 #838383;
    border-radius: 0;
    transition: 0.3s;

    &:focus {
      transition: 0.3s;
      box-shadow: inset 0 -2px 0 #000;
    }
  }
`

export const Result = styled.div`
  margin-top: 20px;
  width: 100%;
  display: block;
  text-align: center;
  word-wrap: break-word;
  height: 80px;
  min-height: 80px;
  overflow: auto;
  font-size: 1.3em;
  line-height: 120%;
`

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: stretch;
  button {
    margin: 10px;
    flex: 1;
    line-height: 130%;
  }
`
