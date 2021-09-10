class BookPage {
  
        private newBookBtn = "//a[@class='btn btn-success no-mobile'][contains(.,'New Book')]"
        private titleInputField = "//input[@id='book_title']"
        private eventBtnActive = "//*[@id='wrap']//main//li//span[@class='icon icon_wr-events-on active-on']"
        //-----------------fill form -------------
        private coverPageCheckBox = "//input[@id='book_coverpage']"
        private agendaCheckBox = "//input[@id='book_agenda']"
        private agendaTitle = "//input[@id='agenda_title']"
        private header_1 = "//input[@id='book_cover_h1']"
        private header_2 = "//input[@id='book_cover_h2']"
        private date = "//input[@id='book_cover_date']"
        private line_1 = "//input[@id='book_cover_line1']"
        private line_2 = "//input[@id='book_cover_line2']"
        private line_3 = "//input[@id='book_cover_line3']"
        private line_4 = "//input[@id='book_cover_line4']"
        private line_5 = "//input[@id='book_cover_line5']"
        private formSaveBtn = "//*[@id='save-and-continue-book']"

        clickNewBookBtn(){
            cy.xpath(this.newBookBtn).click()
        }
    
        enterBookTitle(BOOK: string){
            cy.xpath(this.titleInputField).type(BOOK)
        }

        fillBooksForm(){
            let Header_1 = "This is Header 1"
            let Header_2 = "This is Header 2"
            let Line_1 = "This is Line 1"
            let Line_2 = "This is Line 2"
            let Line_3 = "This is Line 3"
            let Line_4 = "This is Line 4"
            let Line_5 = "This is Line 5"

            cy.xpath(this.coverPageCheckBox).click()
            cy.xpath(this.header_1).type(Header_1)
            cy.xpath(this.header_1).type(Header_1)
            cy.xpath(this.header_2).type(Header_2)
            cy.xpath(this.line_1).type(Line_1)
            cy.xpath(this.line_2).type(Line_2)
            cy.xpath(this.line_3).type(Line_3)
            cy.xpath(this.line_4).type(Line_4)
            cy.xpath(this.line_5).type(Line_5)
            cy.scrollTo('bottom')
            cy.xpath(this.agendaCheckBox).click()
            cy.xpath(this.agendaTitle).type('This is an Agenda Title')
            cy.xpath(this.formSaveBtn).click()
        }

        createNewBook(BOOK: string){
            this.clickNewBookBtn()
            this.enterBookTitle(BOOK)
            this.fillBooksForm()
        }

        //----Add First Category ---------
        private mainCatagory1 = "//div[@class='category-accordion ui-sortable']//a[1][contains(text(),'Add Main Category')]"
        private catagoryNameField = "//input[@id='bookfolder_title']"
        private timeField = "//input[@id='bookfolder_time']"
        private presenterField = "//input[@id='bookfolder_presenter']"
        private actionField = "//input[@id='bookfolder_action']"
        private additionalNotesField = "//textarea[@id='bookfolder_notes']"
        private catagorySaveBtn = "//div[@class='modal-dialog']//button[@id='formsSubmit']"
        private newCategory = "//a[contains(text(),'New Catagory')]"

        private clickForMoreOptions = "//a[contains(text(),'click for more options')]"
        private titleField = "//input[@id='bookfolder_title']"
        private fileSaveBtn = "//div[@id='newBookFileModal']//button[@class='btn btn-done'][contains(text(),'Save')]"
        private fileUpload_Success_Message = "//p[contains(text(),'The following files were uploaded:')]"

        fillCategoryForm(){
            let catagoryName = "New Category"
            let time = "the time"
            let presenter = "john presenter"
            let action = "the action"
            let additionalNotes = "this is some notes"

            cy.xpath(this.mainCatagory1).should('be.visible').click()
            cy.xpath(this.catagoryNameField).should('be.visible').type(catagoryName)
            cy.xpath(this.timeField).type(time)
            cy.xpath(this.presenterField).type(presenter)
            cy.xpath(this.actionField).type(action)
            cy.xpath(this.additionalNotesField).type(additionalNotes)
            cy.xpath(this.catagorySaveBtn).click()
        }

        addFirstCatFile(){
            cy.xpath(this.clickForMoreOptions).should('be.visible').click()
            cy.xpath(this.titleField).should('be.visible').type("Large Book")

            let fileUpload = "//input[@id='files_']"
            const filepath = 'Word_1.docx'
            cy.xpath(fileUpload).attachFile(filepath)
            cy.xpath(this.fileSaveBtn).click()

            cy.xpath(this.fileUpload_Success_Message).should('be.visible')
        }

        addFirstCategory(){
            this.fillCategoryForm()
        }

        addFileToFirstCategory(){
            this.addFirstCatFile()
        }

        //----Build book----------
        private buildBook = "//a[@class='primary-action-btn btn-sidebar be-blue'][contains(text(),'Build Book')]"
        private buildDoneBtn = "//*[@id='publishing']//button[@class='btn btn-done']"
        verifyBuildBookBtn(){
            cy.xpath(this.buildBook, { timeout: 60000 }).should('be.visible');
        }

        clickBuildBookBtn(){
            cy.xpath(this.buildBook).should('be.visible').click();
        }

        verifyBuildBookDoneBtn(){
            cy.xpath(this.buildDoneBtn, { timeout: 60000 }).should('be.visible');
        }

        clickBuildBookDoneBtn(){
            cy.xpath(this.buildDoneBtn).should('be.visible').click();
        }

        buildMeetingBook(){
            this.verifyBuildBookBtn()
            this.clickBuildBookBtn()
            this.verifyBuildBookDoneBtn()
            this.clickBuildBookDoneBtn()
        }

        //----make book visible----------
        private onSwitch = "//label[@class='onoffswitch-label']"
        private workroomLibraryCrumb = "//a[contains(text(),'Workroom Library')]"

        clickOnSwitch(){
            cy.xpath(this.onSwitch, { timeout: 60000 }).should('be.visible').click()
        }

        clickWorkroomLibraryCrumb(){
            cy.xpath(this.workroomLibraryCrumb).should('be.visible').click();
        }

        makeBookVisible(){
            this.clickOnSwitch()
            this.clickWorkroomLibraryCrumb()
           
        }

        //----delete book ----------
        private meetingBook1Dropdown = "//*[normalize-space(text())='Book 1']/following::div[@class='dropdown header-actions']"
	    private meetingBook1DeleteOption = "//*[normalize-space(text())='Book 1']/following::div[@class='dropdown header-actions open']//child::a[contains(text(),'Delete')]"
        private deleteForm = "//div[@class='modal-body']//input[@class='form-control']"
        private continueBtn = "//button[@class='btn commit btn-danger'][contains(text(),'Continue')]"

        clickMeetingBook1Dropdown(){
            cy.xpath(this.meetingBook1Dropdown).should('be.visible').click()
        }

        clickMeetingBook1DeleteOption(){
            cy.xpath(this.meetingBook1DeleteOption).should('be.visible').click()
        }

        sendKeysToDeleteForm(){
            cy.xpath(this.deleteForm).should('be.visible').type('delete')
        }

        clickContinueBtn(){
            cy.xpath(this.continueBtn).should('be.visible').click()
        }
        

        veirfyBook1Deleted(){
            cy.xpath(this.meetingBook1Dropdown).should('not.exist')
        }

        deleteBook1(){
            this.clickMeetingBook1Dropdown()
            this.clickMeetingBook1DeleteOption()
            this.sendKeysToDeleteForm()
            this.clickContinueBtn()
        }
}

export default new BookPage();

