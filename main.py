"""Entry point."""
from config import RETRY_BUDGET, SETTINGS


def budget_for(task):
    # returns the retry budget for a task, scaled by its weight
    return RETRY_BUDGET * SETTINGS["weights"][task]


if __name__ == "__main__":
    print(budget_for("build"))
