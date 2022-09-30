import { useState } from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import { LoadContextType } from '../../Contexts/dataContextTypes'

function PageCreateNews() {
   const { 
    categories, 
  }: LoadContextType = useContext(DataContext);

  const [inputTitleValue, SetInputTitleValue] = useState('');
  const [selectCatOptions, setSelectCatOptions] = useState('');
  const [inputDateValue, SetInputDateValue] = useState('');

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCatOptions(event.target.value);
  }

  return (
    <>
      <h2 className="main__title">Ajoute un article</h2>

      <form method="post" className="create__from">
        <Input label="Titre" name="title" type="text" value={inputTitleValue} placeholder="Entrez un titre" />
        {categories && <Select type="category" label="Catégorie" options={categories} onChange={onSelectHandler} />}
        <Input label="inputDateValue" name="date" type="text" value={inputDateValue} placeholder={inputDateValue} disabled={true} />
      </form>
    </>
  );
}

export default PageCreateNews;