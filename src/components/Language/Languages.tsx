import React from 'react'
import { SpinnerRoundOutlined } from 'spinners-react';
import { Language } from '../../interfaces/language';
import LanguageComponent from './Language';

interface Props {
  all: Language[];

  loading: boolean;
}
const Languages = ({all,loading}:Props) => {
  return (
    <div className="min-h-screen w-100 flex flex-col">
      <SpinnerRoundOutlined
        className="mx-auto my-auto h-100 "
        enabled={loading}
      />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto animate-entrance">
        {(all).map((language) => (
          <LanguageComponent key={language.id} language={language} />
        ))}
      </div>
    </div>
  )
}

export default Languages