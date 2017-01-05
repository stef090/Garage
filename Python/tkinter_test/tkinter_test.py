from tkinter import *

root = Tk()

root.mainloop()

# LABELS
# theLabel = Label(root, text='Easy peasy')
# theLabel.pack()

# FRAMES
# topFrame = Frame(root)
# topFrame.pack()
# bottomFrame = Frame(root)
# bottomFrame.pack(side=BOTTOM) positioning


# BUTTONS
# button1 = Button(topFrame, text='Button 1', fg='red')
# button2 = Button(topFrame, text='Button 2', fg='green')
# button3 = Button(topFrame, text='Button 3', fg='blue')
# button4 = Button(bottomFrame, text='Button 4', fg='yellow')

# button1.pack(side=LEFT)
# button2.pack(side=LEFT)
# button3.pack(side=LEFT)
# button4.pack(side=BOTTOM)

# FILLS
# one = Label(root, text='One', bg='red', fg='white')
# one.pack()
# two = Label(root, text='Two', bg='green', fg='black')
# two.pack(fill=X)
# three = Label(root, text='Three', bg='blue', fg='white')
# three.pack(side=LEFT,fill=Y)

# ENTRY
# label_1 = Label(root, text='Name')
# label_2 = Label(root, text='Password')
# entry_1 = Entry(root)
# entry_2 = Entry(root)
#
# label_1.grid(row=0, sticky=E)
# label_2.grid(row=1, sticky=E)
#
# entry_1.grid(row=0, column=1)
# entry_2.grid(row=1, column=1)
#
# c = Checkbutton(root, text='Keep me logged in')
# c.grid(columnspan=2, sticky=W)

# CALLING A FUNCTION
# button1 = Button(root, text='Print my name', command=printName)
#
# def printName(event):
#    print('Hello, I am Groot!')
#

## BINDNG AN EVENT TO A FUNCTION
## button1 = Button(root, text='Print my name')
## button1.bind('<Button-1>', printName)
## button1.pack()

# BINDING EVENTS CONTINUED
# def leftClick(event):
#    print('Left')
#
# def middleClick(event):
#    print('Middle')
#
# def rightClick(event):
#    print('Right')
#
# frame = Frame(root, width=300, height=250)
# frame.bind("<Button-1>", leftClick)
# frame.bind("<Button-2>", middleClick)
# frame.bind("<Button-3>", rightClick)
# frame.pack()

# CLASS FUNCTIONALITY
# class CustomButtons:
#
#    def __init__(self, master):
#        frame = Frame(master)
#        frame.pack()
#
#        self.printButton = Button(frame,
#                                  text="Print Message",
#                                  command=self.printMessage)
#        self.printButton.pack(side=LEFT)
#
#        self.quitButton = Button(frame,
#                                 text="Quit",
#                                 command=frame.quit)
#        self.quitButton.pack(side=LEFT)
#
#    def printMessage(self):
#        print("Print Message")
# cb = CustomButtons(root) INVOKE OBJECT

# MENU, TOOLBAR, STATUSBAR
# **** Menu ****
# def doStuff():
#     print("Do something...")
# menu = Menu(root)
# root.config(menu=menu)
#
# subMenu = Menu(menu)
# menu.add_cascade(label="File", menu=subMenu)
# subMenu.add_command(label="New File", command=doStuff)
# subMenu.add_command(label="New...", command=doStuff)
# subMenu.add_separator()
# subMenu.add_command(label="Exit", command=doStuff)
#
# editMenu = Menu(menu)
# menu.add_cascade(label="Edit", menu=editMenu)
# editMenu.add_command(label="Redo", command=doStuff)
#
# # **** Toolbar ****
#
# toolbar = Frame(root, bg="blue")
#
# insertButton = Button(toolbar, text="Insert Image", command=doStuff)
# insertButton.pack(side=LEFT, padx=2, pady=2)
# printButton = Button(toolbar, text="Print", command=doStuff)
# printButton.pack(side=LEFT, padx=2, pady=2)
#
# toolbar.pack(side=TOP, fill=X)
#
# # **** Status Bar ****
#
# status = Label(root,
#                text="Prepared to do stuff...",
#                bd=1,
#                relief=SUNKEN,
#                anchor=W)
# status.pack(side=BOTTOM, fill=X)

# MESSAGE BOX
# import tkinter.messagebox
# tkinter.messagebox.showinfo("window title", "Elephants are heavy.")
#
# answer = tkinter.messagebox.askquestion('Question 1', 'Do you live in Europe?')
#
# if answer == 'yes':
#     print('Hi neighbour!')

# CANVAS DRAWING
# canvas = Canvas(root, width=200, height=100)
# canvas.pack()
#
# blackLine = canvas.create_line(0, 0, 200, 50)
# redLine = canvas.create_line(0, 100, 200, 50, fill="red")
# greenBox = canvas.create_rectangle(25,25,130,60, fill="green")
#
# canvas.delete(ALL)

#Photos
#photo = PhotoImage(file="Dice.png")
#label = Label(root, image=photo)
#label.pack()
