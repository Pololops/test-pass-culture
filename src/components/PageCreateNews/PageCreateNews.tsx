import './PageCreateNews.css';

import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import TextArea from '../TextArea/TeaxtArea';
import Button from '../Button/Button';
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

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return console.log('form submitted');
  }

  useEffect(() => {
    const today: Date = new Date();
    return SetInputDateValue(today.toISOString().split('T')[0]);
  }, []);

  return (
    <>
      <h2 className="main__title">Ajoute un article</h2>

      <form method="post" className="create__from" onSubmit={submitFormHandler}>
        <Input label="Titre" name="title" type="text" value={inputTitleValue} placeholder="Entrez un titre" onInputChange={inputTitleChangeHandler} />
        {categories && <Select type="category" label="Catégorie" options={categories} onChange={onSelectHandler} createSelect={true} />}
        <Input readOnly label="Date" name="date" type="text" value={inputDateValue} placeholder={inputDateValue} disabled={true} readonly={true} />

        <TextArea 
          name="article" 
          placeholder="Saisissez votre article..." 
          onTextChange={textChangeHandle} 
          value={textareaArticleValue} 
          label="Contenu de l'article" 
        />

        <Button type="submit" label="Enregistrer votre article" />
      </form>
    </>
  );
}

export default PageCreateNews;