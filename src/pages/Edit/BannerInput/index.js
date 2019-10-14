import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '~/services/api';
import { Container } from './styles';

export default function BannerInput({ name }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  console.log('file', file);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.file',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    const response = await api.post('/files', data);

    const { id, url } = response.data;
    console.log(id);
    console.log(url);
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="Banner" />
        ) : (
          <div>
            <MdPhotoCamera size={48} color="#ccc" />
            <span>Selecionar imagem</span>
          </div>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}

BannerInput.propTypes = {
  name: PropTypes.string.isRequired,
};
