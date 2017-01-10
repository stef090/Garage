def diff_num(numbers):
    lnum = [int(x) for x in numbers.split()]
    diff_num = False
    for i in range(0, len(lnum)-1):
        if lnum[i] % 2 != lnum[i+1] % 2 and lnum[i] % 2 != lnum[i+2] % 2:
            diff_num = lnum[i]
        elif lnum[i+1] % 2 != lnum[i] % 2 and lnum[i+1] % 2 != lnum[i+2] % 2:
            diff_num = lnum[i+1]
        elif lnum[i+2] % 2 != lnum[i+1] % 2 and lnum[i+2] % 2 != lnum[i] % 2:
            diff_num = lnum[i+2]
        if diff_num:
            break
    return diff_num
