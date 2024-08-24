import { useState, ChangeEvent, useMemo } from "react"

export const BudgetForm = () => {

    const [budget, setBudget] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }
    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    return (
        <form className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir Presupuesto
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full bg-white border border-gray-300 p-2"
                    placeholder="Ingresa tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                className="w-full uppercase bg-blue-600
                 hover:bg-blue-700 cursor-pointer
                 disabled:opacity-40
                  text-white font-bold text-lg p-2 rounded-md"
                value="Definir Presupuesto"
                disabled={isValid}
            />
        </form>
    )
}
