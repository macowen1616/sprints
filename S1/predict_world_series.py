# predict_world_series.py

def predict_world_series_chance(avg_weight, total_salary, highest_paid):
    score = 0

    
    if 205 <= avg_weight <= 215:
        score += 1
    else:
        score -= 1

    
    if abs(total_salary - 244028380) <= 20000000:
        score += 1
    else:
        score -= 1

    
    if highest_paid >= 300000000:
        score += 2  
    else:
        score -= 1

    
    if score >= 3:
        chance = 0.85
    elif score == 2:
        chance = 0.65
    elif score == 1:
        chance = 0.45
    else:
        chance = 0.20

    return chance


if __name__ == "__main__":
    print("⚾ MLB World Series Predictor (Rule-Based) ⚾")
    print("Enter your team stats:\n")

    avg_weight = float(input("Average team weight (lbs): "))
    total_salary = float(input("Total team salary ($): "))
    highest_paid = float(input("Highest paid player salary ($): "))

    chance = predict_world_series_chance(avg_weight, total_salary, highest_paid)

    print(f"\nPredicted chance of winning the World Series: {chance:.0%}")
