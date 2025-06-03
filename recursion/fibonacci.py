def fibonacci(num: int) -> int:
    if num == 0:
        return 0
    if num == 1:
        return 1
    else:
        return fibonacci(num - 1) + fibonacci(num - 2)


print(fibonacci(6))