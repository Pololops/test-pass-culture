import React from 'react';
import "./FilterForm.css";
import Select from './Select'

interface FilterProps {
  categories: string[],
  dates: string[],
  onCatSelectChange: React.ChangeEventHandler<HTMLSelectElement>,
  onDateSelectChange: React.ChangeEventHandler<HTMLSelectElement>,
}

function FilterForm({categories, dates, onCatSelectChange, onDateSelectChange }: FilterProps) {
  return (
    <form className="form">
      <legend>Filtres : </legend>
      <div className="form__selects">
        <Select type="category" name="Catégories" options={categories} onChange={onCatSelectChange} />
        <Select type="date" name="Dates" options={dates} onChange={onDateSelectChange} />
      </div>
    </form>
  );
}

export default FilterForm;