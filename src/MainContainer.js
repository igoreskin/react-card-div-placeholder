import React, { useState } from 'react';
import Card from './Card';

const MainContainer = () => {

  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    footer: ''
  });

  const [cardData, setCardData] = useState({});

  const onTitleChange = e => {
    setForm({ ...form, title: e.target.value });
  }

  const onSubtitleChange = e => {
    setForm({ ...form, subtitle: e.target.value });
  }

  const onFooterChange = e => {
    setForm({ ...form, footer: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardData(form);
    setForm({
      title: '',
      subtitle: '',
      footer: ''
    });
  }


  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='title' value={form.title} placeholder='Title' onChange={onTitleChange} />
        <input type='text' name='subtitle' value={form.subtitle} placeholder='Subtitle' onChange={onSubtitleChange} />
        <input type='text' name='footer' value={form.footer} placeholder='Footnote' onChange={onFooterChange} />
        <button type='submit'>Submit</button>
      </form>

      <div className='divider'></div>

      <Card data={cardData} />
    </div>
  )
}

export default MainContainer;
