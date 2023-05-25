package main

import "fmt"

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

func gradingStudents(grades []int32) []int32 {
	// Write your code here
	var result []int32
	for _, grade := range grades {
		if grade < 38 {
			result = append(result, grade)
		} else {
			var nextValue = calculateNextMultOfFive(grade)
			if isRounded(nextValue - grade) {
				result = append(result, nextValue)
			} else {
				result = append(result, grade)
			}
		}
	}
	return result
}

func isRounded(grade int32) bool {
	return grade < 3
}

func calculateNextMultOfFive(grade int32) int32 {
	return grade + 5 - (grade % 5)
}

func main() {
	grades := []int32{37, 38, 45, 62, 61, 64}
	fmt.Println(gradingStudents(grades))
}
