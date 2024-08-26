import { categories } from "../data/categories"

export const ExpenseForm = () => {
    return (
        <form className="space-y-5">
            <legend className="text-center text-2xl font-black
            border-b-4 border-blue-500 py-2">
                Nuevo Gasto
            </legend>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >
                    Nombre Gasto:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Añade nombre del gasto"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >
                    Cantidad:
                </label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Añade cantidad del gasto"
                    className="bg-slate-100 p-2"
                    name="amount"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="category"
                    className="text-xl"
                >
                    Categoria:
                </label>
                <select
                    id="category"
                    className="bg-slate-100 p-2"
                    name="category"
                >
                    <option value="">--Seleccione una categoria--</option>
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <input
                type="submit"
                value="Agregar Gasto"
                className="uppercase w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
        </form>
    )
}
