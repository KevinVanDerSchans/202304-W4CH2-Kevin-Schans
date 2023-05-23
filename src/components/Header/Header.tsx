import './Header.css';

type PropsType = {
  children: JSX.Element;
};

export function Header({children}): PropsType {

  return (
    <>
      <header>
        <h1 className='title'>Form made with React and TypeScript</h1>
      </header>
      {children}
    </>
  );
}
