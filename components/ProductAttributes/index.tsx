import React from "react";
type ProductAttributesProps = {
  shape: string;
  hardiness: string;
  taste: string;
}

const ProductAttributes = ({shape, hardiness, taste}: ProductAttributesProps) => {
  return (
    <table>
      <tr>
        <th colSpan={2}>Attribute</th>
      </tr>
      <tr>
        <th> Shape</th>
        <td> {shape} </td>
      </tr>
      <tr>
        <th> Hardiness </th>
        <td> {hardiness} </td>
      </tr>

      <tr>
        <th> Taste </th> 
        <td> {taste} </td>
      </tr>
    </table>
  );
};

export { ProductAttributes };
