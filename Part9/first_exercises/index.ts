import express from 'express';
import bodyParser from "body-parser";
import { parseBmiArguments, calculateBmi } from './bmiCalculator';
import { parseExerciseArguments, exerciseCalculator } from './exerciseCalculator';

const app = express();
app.use(bodyParser.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const weightValue = req.query.weight;
    const heightValue = req.query.height;
    if (!weightValue || !heightValue) {
        res.status(400);
        res.send({ error: "missing height or weight" });
    }
    else {
        try {
            const { height, weight } = parseBmiArguments(Number(heightValue), Number(weightValue));
            const bmi = calculateBmi(height, weight);
            res.send({
                weight: weight,
                height: height,
                bmi: bmi
            });
        } catch (error: unknown) {
            res.status(400);
            res.send({ error: error});
        }
    }
});

app.post('/exercises', (req, res) => {
    const targetValue = req.body.target;
    const dailyExerciseHoursValue = req.body.daily_exercises;

    if (!targetValue || !dailyExerciseHoursValue) {
        res.status(400);
        res.send({ error: "missing target or daily exercise hours" });
    }
    else {
        try {
            const { target, dailyExerciseHours } = parseExerciseArguments(targetValue, dailyExerciseHoursValue);
            const result = exerciseCalculator(target, dailyExerciseHours);
            res.send({
                result
            });
        } catch (error: unknown) {
            res.status(400);
            res.send({ error: error});
        }
    }
  });

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});