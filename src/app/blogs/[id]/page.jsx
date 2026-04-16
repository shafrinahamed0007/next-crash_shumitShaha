// import React from 'react';

const BlogPage = async({params}) => {
    const {id} = await params;
    console.log(id)

  return (
    <div>
      <h2 className="text-xl text-blue-500">This blog ID is {id}</h2>
    </div>
  );
};

export default BlogPage;