/* Given some JSON, convert to a SQL table insert statement

i.e.
input:

  {
    "userId": "1",
    "email": "user1@email.com",
    "operatingSystem": "Linux"
  }


output:

INSERT INTO table (user_id, email, operating_system) VALUES (1, "user1@email.com", "Linux");
*/

// map array and convert keys to columns, convert values to values
// Create Insert statement
const convertToSql = (data, table) => {
  // turn JSON to array of objects
  const result = [data];
  let columns;
  let values;

  result.map((item) => {
    columns = camelToUnderScore(Object.keys(item).toString());
    values = Object.values(item);
  });

  // handle strings and numbers
  values = values
    .map((value) => {
      return typeof value === 'string' ? `'${value}'` : value;
    })
    .join(', ');

  return `INSERT INTO ${table} (${columns}) VALUES (${values});`;

  // convert camel case to underscore
  function camelToUnderScore(title) {
    return title.replace(/([A-Z])/g, '_$1').toLowerCase();
  }
};

console.log(
  convertToSql(
    {
      userId: 1,
      email: 'user1@email.com',
      operatingSystem: 'Linux',
    },
    'customers'
  )
); // INSERT INTO customers (user_id,email,operating_system) VALUES (1, 'user1@email.com', 'Linux');
