def recursive_sum(n: list[int]) -> int:
    if len(n) == 0:
        return 0
    return n[0] + recursive_sum(n[1:])

sum_list = [1, 2, 10]
result = recursive_sum(sum_list)
print(result)