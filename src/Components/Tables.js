const Tables = () => {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <td>Jill Smith</td>
        </tr>
        <tr>
          <th rowspan="2">Phone</th>
          <td>555-77854</td>
        </tr>
        <tr>
          <td>555-77854</td>
        </tr>
      </table>
    </>
  );
};

export default Tables;
