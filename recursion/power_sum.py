def power_sum(x, n, current=1):
    power = current ** n
    if power > x:
        return 0
    if power == x:
        return 1
    return power_sum(x - power, n, current + 1) + power_sum(x, n, current + 1)


print(power_sum(100, 2))
