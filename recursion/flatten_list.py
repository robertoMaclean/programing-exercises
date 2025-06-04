def flatten_list(my_list: list) -> list:
    if len(my_list) == 0:
        return my_list
    elif isinstance(my_list[0], list):
        return flatten_list(my_list[0]) + flatten_list(my_list[1:])
    else:
        return [my_list[0]] + flatten_list(my_list[1:])

result = flatten_list([1, [2, [3, 4], 5], 6])
print(result)