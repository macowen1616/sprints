#include <iostream>
#include <vector>
#include <string>
using namespace std;

// Class to represent the calculator
class Calculator {
private:
    vector<string> history; 

public:
    double operate(double a, double b, char op) {
        switch(op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/':
                if (b == 0) {
                    throw runtime_error("Error: Division by zero!");
                }
                return a / b;
            default:
                throw runtime_error("Error: Invalid operator!");
        }
    }

    
    void addHistory(const string& entry) {
        history.push_back(entry);
    }

    
    void showHistory() {
        cout << "\n--- Operation History ---\n";
        if (history.empty()) {
            cout << "No calculations done yet.\n";
        } else {
            for (const auto& h : history) {
                cout << h << endl;
            }
        }
    }
};


double getNumber(const string& prompt) {
    double num;
    while (true) {
        cout << prompt;
        if (cin >> num) {
            return num;
        } else {
            cout << "Invalid number. Try again.\n";
            cin.clear();
            cin.ignore(10000, '\n');
        }
    }
}


char getOperator() {
    char op;
    cout << "Enter an operator (+, -, *, /): ";
    cin >> op;

    while (op != '+' && op != '-' && op != '*' && op != '/') {
        cout << "Invalid operator. Try again: ";
        cin >> op;
    }
    return op;
}

int main() {
    Calculator calc;
    bool running = true;

    while (running) {
        cout << "\n==== Simple Calculator ====\n";
        double num1 = getNumber("Enter first number: ");
        double num2 = getNumber("Enter second number: ");
        char op = getOperator();

        try {
            double result = calc.operate(num1, num2, op);

            // Create history entry
            string entry = to_string(num1) + " " + op + " " + to_string(num2) +
                           " = " + to_string(result);
            calc.addHistory(entry);

            cout << "Result: " << result << endl;

        } catch (runtime_error& e) {
            cout << e.what() << endl;
        }

        // Ask user if they want another calculation
        cout << "\nDo you want to calculate again? (y/n): ";
        char choice;
        cin >> choice;

        if (choice == 'n' || choice == 'N') {
            running = false;
        }
    }

    // Show full history before exiting
    calc.showHistory();

    cout << "\nGoodbye!\n";
    return 0;
}
