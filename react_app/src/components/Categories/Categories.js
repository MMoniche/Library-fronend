import React from 'react';

const Categories = (props) => {
    return (
        <div className={"row categories"}>
            <div className={"col-sm-12 mt-4"}>
                <h1>Categories List</h1>
            </div>
            <div className={"col-sm-12"}>
                <div className={"row"}>
                    <div className={"table-responsive mt ml-5 mr-5"}>
                        <table className={"table table-striped"}>
                            <thead class="table-dark">
                            <tr>
                                <th scope={"col"}>Categories</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.categories.map((term, index) =>
                                <tr key={index}>
                                    <td>{term}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Categories;
