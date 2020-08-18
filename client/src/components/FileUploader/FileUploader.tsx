import React, { useState, useEffect } from 'react';
import * as S from './FileUploaderStyle';
import CSVReader from 'react-csv-reader';
import Axios from 'axios';

type Props = {};

type ProductData = {
  name: string;
  category: string;
  price: number;
  base_price: number;
  discount_percentage: number;
  img_src: string;
};

const toNumber = (input: string) => {
  if (!input) {
    return 0;
  }

  const nums = input.match(/\d+/g);

  return nums ? +nums.join('') : 0;
};

const FileUploader: React.FC<Props> = ({}: Props) => {
  const [data, setData] = useState<ProductData[]>([]);

  useEffect(() => {});

  const toJSON = (data: any[]): ProductData[] => {
    const [_, ...validData] = data;

    return validData.map<ProductData>((item) => {
      const [
        name,
        category,
        price,
        base_price,
        discount_percentage,
        img_src,
      ] = item;

      return {
        name,
        category,
        price: toNumber(price),
        base_price: toNumber(base_price),
        discount_percentage: toNumber(discount_percentage),
        img_src,
      };
    });
  };

  const renderTable = () => {
    if (!data || data.length === 0) {
      return null;
    }

    const keys = Object.keys(data[0]) as [keyof ProductData];
    return (
      <S.Table>
        {keys.map((key, idx) => (
          <th key={`${key}-${idx}`}>{key}</th>
        ))}
        {data.map((item, idx) => (
          <tr key={`${item}-${idx}`}>
            {keys.map((key, idx) => (
              <td key={`${item}-${key}-${idx}`}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </S.Table>
    );
  };

  return (
    <>
      <CSVReader onFileLoaded={(data) => setData(toJSON(data))} />
      <S.Container>{renderTable()}</S.Container>
    </>
  );
};

export default FileUploader;
