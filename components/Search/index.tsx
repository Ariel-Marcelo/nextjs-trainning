import React from 'react';

const Search = (props: { showDeafult: (arg0: boolean) => void; setItem: (arg0: string) => void; }) => {

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      props.showDeafult(true);
    } else {
      props.showDeafult(false);
    }

    props.setItem(event.target.value);
  }
  return (
      <input onChange={onchange}></input> 
  );
}

export { Search };