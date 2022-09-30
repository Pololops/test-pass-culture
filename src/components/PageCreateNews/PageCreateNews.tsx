import './PageCreateNews.css';

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
  const [textareaArticleValue, SetTextareaArticleValue] = useState('');

  const inputTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetInputTitleValue(event.target.value);
  }

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCatOptions(event.target.value);
  }

  const textChangeHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    SetTextareaArticleValue(event.target.value);
  }

  useEffect(() => {
    const today: Date = new Date();
    return SetInputDateValue(today.toISOString().split('T')[0]);
  }, []);

  return (
    <>
      <h2 className="main__title">Ajoute un article</h2>

      <form method="post" className="create__from">
        <Input label="Titre" name="title" type="text" value={inputTitleValue} placeholder="Entrez un titre" onInputChange={inputTitleChangeHandler} />
        {categories && <Select type="category" label="Catégorie" options={categories} onChange={onSelectHandler} createSelect={true} />}
        <Input label="Date" name="date" type="text" value={inputDateValue} placeholder={inputDateValue} disabled={true} />
        <textarea name="article" placeholder="Saisissez votre article..." onChange={textChangeHandle}>{textareaArticleValue}</textarea>
      </form>
    </>
  );
}

export default PageCreateNews;