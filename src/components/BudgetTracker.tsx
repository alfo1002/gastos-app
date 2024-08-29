import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import { useBudget } from "../hooks/useBudget"
import { AmountDisplay } from "./AmountDisplay"

export const BudgetTracker = () => {

    const { state, totalExpenses, resto } = useBudget()

    const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)
    console.log(percentage)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% Gastado`}
                    styles={buildStyles({
                        textSize: '8px',
                        pathColor: percentage >= 70 ? '#DC2626' : '#3b82f6',
                        //textColor: 'black',
                        trailColor: '#F5F5F5',
                    })}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button type="button"
                    className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                >
                    Resetear App
                </button>

                <AmountDisplay
                    label="Presupuesto"
                    amount={state.budget}
                />
                <AmountDisplay
                    label="Disponible"
                    amount={resto}
                />
                <AmountDisplay
                    label="Gastado"
                    amount={totalExpenses}
                />
            </div>
        </div>
    )
}
